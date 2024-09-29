type TreeNode = {
  id: number;
  children?: null | undefined | TreeNode[];
  [key: string]: any;
};

/**
 * 迭代树型结构数据
 * @param tree
 * @param fn - 回调函数
 * @param childrenField - 指定 children key
 */
export function iterateTree(
  tree: TreeNode | TreeNode[],
  fn: (node: TreeNode) => void,
  childrenField = "children"
) {
  const stack = Array.isArray(tree) ? [...tree] : [tree];
  while (stack.length > 0) {
    const node = stack.pop() as TreeNode;
    if (fn) fn(node);
    if (node?.[childrenField] && node[childrenField].length > 0) {
      stack.push(...node[childrenField]);
    }
  }
}

/**
 * 分离树的非叶子节点合叶子节点 id
 * @param ids - 节点的 id 集合
 * @param treeData - 树型结构数据
 * @param childrenField - 指定 children key
 */
export function separateTreeIds(
  ids: number[],
  treeData: TreeNode | TreeNode[],
  childrenField = "children"
) {
  const idsMap = new Map(ids.map((id) => [id, id])); // 将 ids 转成 map，降低查找的复杂度
  const nonLeafNodeIds: number[] = []; // 非叶子节点
  const leafNodeIds: number[] = []; // 叶子节点

  iterateTree(
    treeData,
    (node) => {
      if (!idsMap.has(node.id)) return;

      if (node.childList && node.childList.length > 0) {
        nonLeafNodeIds.push(node.id);
      } else {
        leafNodeIds.push(node.id);
      }
    },
    childrenField
  );

  return { nonLeafNodeIds, leafNodeIds };
}
