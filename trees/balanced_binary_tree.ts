class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function isBalanced(root: TreeNode | null): boolean {
  return height(root) !== -1;
}

function height(node: TreeNode | null): number {
  if (!node) return 0;

  const left = height(node.left);
  if (left === -1) return -1;

  const right = height(node.right);
  if (right === -1) return -1;

  if (Math.abs(left - right) > 1) return -1;

  return Math.max(left, right) + 1;
}