class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

/**
 * 二叉搜索树
 */
export default class BST {
	constructor() {
		this.root = null;
	}

	/**
	 * 插入节点
	 * @param value 节点内容
	 */
	insert(value) {
		let node = new Node(value);
		if(this.root === null) {
			this.root = node;
		} else {
			let curNode = this.root;
			let parent;
			while(curNode) {
				parent = curNode;
				if(value < curNode.value) {
					curNode = curNode.left;
					if(curNode === null) {
						parent.left = node;
						break;
					}
				} else {
					curNode = curNode.right;
					if(curNode === null) {
						parent.right = node;
						break;
					}
				}
			}
		}
	}

	/**
	 * 中序遍历
	 * @return {Array} 遍历结果数组
	 */
	inOrder() {
		let node = this.root
		let array = [];
		function order(node){
			if(!(node === null)) {
				order(node.left);
				array.push(node.value);
				order(node.right);
			}
		}
		order(node)
		return array;
	}

	/**
	 * 先序遍历
	 * @return {Array} 遍历结果数组
	 */
	preOrder() {
		let node = this.root
		let array = [];
		function order(node){
			if(!(node === null)) {
				array.push(node.value);
				order(node.left);
				order(node.right);
			}
		}
		order(node)
		return array;
	}

	/**
	 * 后序遍历
	 * @return {Array} 遍历结果数组
	 */
	postOrder() {
		let node = this.root
		let array = [];
		function order(node){
			if(!(node === null)) {
				order(node.left);
				order(node.right);
				array.push(node.value);
			}
		}
		order(node)
		return array;
	}

	/**
	 * 获取最小值
	 * @return {Number} 最小值
	 */
	getMin() {
		let curNode = this.root;
		if(curNode === null) {
			return
		} else {
			while(curNode) {
				if(curNode.left === null) {
					return curNode.value;
				} else {
					curNode = curNode.left;
				}
			}
		}
	}

	/**
	 * 获取最大值
	 * @return {Number} 最大值
	 */
	getMax() {
		let curNode = this.root;
		if(curNode === null) {
			return
		} else {
			while(curNode) {
				if(curNode.right === null) {
					return curNode.value;
				} else {
					curNode = curNode.right;
				}
			}
		}
	}

  /**
   * 删除节点
   * @param value 要删除的节点值
   */
  remove(value) {
    // 树为空
	  if(this.root === null) {
	    throw new Error("BST Error! The BST is null!")
    } else { // 树不为空
      let curNode = this.root, previous;
      // 查找节点
      while(curNode) {
        if(curNode.value === value) {
          break;
        }
        previous = curNode;
        if(value < curNode.value) {
          curNode = curNode.left;
        } else {
          curNode = curNode.right;
        }
      }
      if(curNode) { // 节点存在
        // 如果要删除的节点是根节点
        if(curNode === this.root) {
          if(!curNode.right) {        // 没有右子树
            this.root = curNode.left;
            curNode.left = null;
          } else if(!curNode.left){   // 没有左子树
            this.root = curNode.right;
            curNode.right = null;
          } else {  // 存在左右子树
            let tmp = curNode.left, prev = curNode;
            while(tmp.right) {
              prev = tmp;
              tmp = tmp.right;
            }
            curNode.value = tmp.value;    // 复制
            if(prev === curNode) {
              prev.left = tmp.left;
              tmp.left = null;
            } else {
              prev.right = tmp.left;
              tmp.left = null;
            }
          }
        } else {  // 如果要删除的节点不是根节点
          if(!curNode.right) {  // 要删除的节点没有右子树
            if(curNode.value < previous.value) {
              previous.left = curNode.left;
            } else {
              previous.right = curNode.left;
            }
            curNode.left = null;
          } else if(!curNode.left) { // 要删除的节点没有左子树
            if(curNode.value < previous.value) {
              previous.left = curNode.right;
            } else {
              previous.right = curNode.right;
            }
            curNode.right = null;
          } else {  // 要删除的节点有左右子树
            let tmp = curNode.left, prev = curNode;
            while(tmp.right) {
              prev = tmp;
              tmp = tmp.right;
            }
            curNode.value = tmp.value;    // 复制
            if(prev === curNode) {
              prev.left = tmp.left;
              tmp.left = null;
            } else {
              prev.right = tmp.left;
              tmp.left = null;
            }
          }
        }
      } else { // 节点不存在
        throw new Error("BST Error! The value " + value + "is not exist!")
      }
    }
  }
}
