/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  let queue: TreeNode[] = [root];
  let result = [];

  while (queue.length) {
      let levelSize = queue.length;
      let levelResult = [];
      for (let i = 0; i < levelSize; i++) {
          let node = queue.shift();
          if (!node) break;

          levelResult.push(node.val);
          if (node.left) queue.push(node.left);
          if (node.right) queue.push(node.right);
      }

      result.push(levelResult)
  }

  return result;
};