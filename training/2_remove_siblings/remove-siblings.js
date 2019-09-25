/**
 * removeSiblings - removes all siblings of given node
 * @param {Object} node
 */
export function removeSiblings(node) {
  const parent = node.parentElement;
  parent.innerHTML = '';
  parent.appendChild(node);
}
