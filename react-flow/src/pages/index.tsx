import { TextUpdateNode } from '@/components/flow/TextUpdateNode';
import { useCallback } from 'react'
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge, OnConnect, Panel} from 'reactflow'
import 'reactflow/dist/style.css'

// ノード
const initialNodes = [
  {
    id: '1',
    position: { x: 100, y: 100 },
    data: { label: '1' },
    style: { width: 100, height: 100 },
  },
  {
    id: '2',
    position: { x: 200, y: 200 },
    data: { label: '2' },
    style: { width: 500, height: 500 },
  },
  {
    id: '3',
    data: { label: 'child node 3' },
    position: { x: 10, y: 10 },
    style: { width: 100, height: 50 },
    parentNode: '2',
  },
  {
    id: '4',
    data: { label: 'child node 3' },
    position: { x: 110, y: 10 },
    style: { width: 100, height: 50, fontSize: '40px', backgroundColor: '#ff6633', },
    parentNode: '2',
    draggable: false,
  },
  {
    id: '5',
    type: 'textUpdate',
    data: { label: 'child node 3' },
    position: { x: 10, y: 60 },
    style: { width: 100, height: 100 },
    parentNode: '2',
  },
];
// つなぐもの
// see https://reactflow.dev/docs/examples/edges/custom-connectionline/
const initialEdges = [{ id: '1to2', source: '1', target: '2' }];
const nodeTypes = { textUpdate: TextUpdateNode }

export default function Page() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect: OnConnect = useCallback((params) => {
    return setEdges(eds => addEdge(params, eds))
  }, [setEdges])

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <button onClick={(e) => {
        e.preventDefault();
        initialNodes.push({id: '6', position: {x:200, y:300},data:{label:'aaa'}})
        setNodes(initialNodes)
      }}>a</button>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView={true}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
        <Panel position='top-right' style={{color: '#fafafa'}}>panel</Panel>
      </ReactFlow>
    </div>
  );
}
