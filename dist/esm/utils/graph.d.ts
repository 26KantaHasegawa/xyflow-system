import { type Transform, type XYPosition, type Rect, type NodeOrigin, type NodeBase, type EdgeBase, type FitViewParamsBase, type FitViewOptionsBase, CoordinateExtent, OnError, OnBeforeDeleteBase, NodeLookup, InternalNodeBase, NodeDragItem } from '../types';
/**
 * Test whether an object is useable as an Edge
 * @public
 * @remarks In TypeScript this is a type guard that will narrow the type of whatever you pass in to Edge if it returns true
 * @param element - The element to test
 * @returns A boolean indicating whether the element is an Edge
 */
export declare const isEdgeBase: <EdgeType extends EdgeBase = EdgeBase>(element: any) => element is EdgeType;
/**
 * Test whether an object is useable as a Node
 * @public
 * @remarks In TypeScript this is a type guard that will narrow the type of whatever you pass in to Node if it returns true
 * @param element - The element to test
 * @returns A boolean indicating whether the element is an Node
 */
export declare const isNodeBase: <NodeType extends NodeBase = NodeBase>(element: any) => element is NodeType;
export declare const isInternalNodeBase: <NodeType extends InternalNodeBase = InternalNodeBase>(element: any) => element is NodeType;
/**
 * Pass in a node, and get connected nodes where edge.source === node.id
 * @public
 * @param node - The node to get the connected nodes from
 * @param nodes - The array of all nodes
 * @param edges - The array of all edges
 * @returns An array of nodes that are connected over eges where the source is the given node
 */
export declare const getOutgoers: <NodeType extends NodeBase = NodeBase, EdgeType extends EdgeBase = EdgeBase>(node: NodeType | {
    id: string;
}, nodes: NodeType[], edges: EdgeType[]) => NodeType[];
/**
 * Pass in a node, and get connected nodes where edge.target === node.id
 * @public
 * @param node - The node to get the connected nodes from
 * @param nodes - The array of all nodes
 * @param edges - The array of all edges
 * @returns An array of nodes that are connected over eges where the target is the given node
 */
export declare const getIncomers: <NodeType extends NodeBase = NodeBase, EdgeType extends EdgeBase = EdgeBase>(node: NodeType | {
    id: string;
}, nodes: NodeType[], edges: EdgeType[]) => NodeType[];
export declare const getNodePositionWithOrigin: (node: NodeBase, nodeOrigin?: NodeOrigin) => XYPosition;
export type GetNodesBoundsParams = {
    nodeOrigin?: NodeOrigin;
};
/**
 * Determines a bounding box that contains all given nodes in an array
 * @public
 * @remarks Useful when combined with {@link getViewportForBounds} to calculate the correct transform to fit the given nodes in a viewport.
 * @param nodes - Nodes to calculate the bounds for
 * @param params.nodeOrigin - Origin of the nodes: [0, 0] - top left, [0.5, 0.5] - center
 * @returns Bounding box enclosing all nodes
 */
export declare const getNodesBounds: (nodes: NodeBase[], params?: GetNodesBoundsParams) => Rect;
export type GetInternalNodesBoundsParams<NodeType> = {
    useRelativePosition?: boolean;
    filter?: (node: NodeType) => boolean;
};
/**
 * Determines a bounding box that contains all given nodes in an array
 * @internal
 */
export declare const getInternalNodesBounds: <NodeType extends InternalNodeBase | NodeDragItem>(nodeLookup: Map<string, NodeType>, params?: GetInternalNodesBoundsParams<NodeType>) => Rect;
export declare const getNodesInside: <NodeType extends NodeBase = NodeBase>(nodes: Map<string, InternalNodeBase<NodeType>>, rect: Rect, [tx, ty, tScale]?: Transform, partially?: boolean, excludeNonSelectableNodes?: boolean) => InternalNodeBase<NodeType>[];
/**
 * Get all connecting edges for a given set of nodes
 * @param nodes - Nodes you want to get the connected edges for
 * @param edges - All edges
 * @returns Array of edges that connect any of the given nodes with each other
 */
export declare const getConnectedEdges: <NodeType extends NodeBase = NodeBase, EdgeType extends EdgeBase = EdgeBase>(nodes: NodeType[], edges: EdgeType[]) => EdgeType[];
export declare function getFitViewNodes<Params extends NodeLookup<InternalNodeBase<NodeBase>>, Options extends FitViewOptionsBase<NodeBase>>(nodeLookup: Params, options?: Pick<Options, 'nodes' | 'includeHiddenNodes'>): NodeLookup;
export declare function fitView<Params extends FitViewParamsBase<NodeBase>, Options extends FitViewOptionsBase<NodeBase>>({ nodes, width, height, panZoom, minZoom, maxZoom }: Params, options?: Omit<Options, 'nodes' | 'includeHiddenNodes'>): Promise<boolean>;
/**
 * This function calculates the next position of a node, taking into account the node's extent, parent node, and origin.
 *
 * @internal
 * @returns position, positionAbsolute
 */
export declare function calculateNodePosition<NodeType extends NodeBase>({ nodeId, nextPosition, nodeLookup, nodeOrigin, nodeExtent, onError, }: {
    nodeId: string;
    nextPosition: XYPosition;
    nodeLookup: NodeLookup<InternalNodeBase<NodeType>>;
    nodeOrigin?: NodeOrigin;
    nodeExtent?: CoordinateExtent;
    onError?: OnError;
}): {
    position: XYPosition;
    positionAbsolute: XYPosition;
};
/**
 * Pass in nodes & edges to delete, get arrays of nodes and edges that actually can be deleted
 * @internal
 * @param param.nodesToRemove - The nodes to remove
 * @param param.edgesToRemove - The edges to remove
 * @param param.nodes - All nodes
 * @param param.edges - All edges
 * @param param.onBeforeDelete - Callback to check which nodes and edges can be deleted
 * @returns nodes: nodes that can be deleted, edges: edges that can be deleted
 */
export declare function getElementsToRemove<NodeType extends NodeBase = NodeBase, EdgeType extends EdgeBase = EdgeBase>({ nodesToRemove, edgesToRemove, nodes, edges, onBeforeDelete, }: {
    nodesToRemove: Partial<NodeType>[];
    edgesToRemove: Partial<EdgeType>[];
    nodes: NodeType[];
    edges: EdgeType[];
    onBeforeDelete?: OnBeforeDeleteBase<NodeType, EdgeType>;
}): Promise<{
    nodes: NodeType[];
    edges: EdgeType[];
}>;
//# sourceMappingURL=graph.d.ts.map