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
class BST {
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
}
