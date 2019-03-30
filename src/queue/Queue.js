import UnidirectionalLinkedList from '../linkedList/UnidirectionalLinkedList'

/**
 * 队列（单向链表实现）
 */
export default class Queue {
  constructor() {
    this._queue = new UnidirectionalLinkedList();
    this.size = 0;
  }

  /**
   * 在队尾添加元素
   * @param element 添加到队尾的元素
   */
  enqueue(element) {
    this._queue.push(element);
    this.size = this._queue.length;
  }

  /**
   * 取出队列第一个元素
   * @return {*} 第一个元素的值，若队列为空，返回undefined
   */
  dequeue() {
    let node = this._queue.shift();
    if(node) {
      this.size = this._queue.length;
      return node.value;
    } else {
      return;
    }
  }

  /**
   * 判断队列是否为空
   * @return {boolean} 队列为空：true；非空：false
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * 清空队列
   */
  clear() {
    let el = true;
    while(el) {
      el = this._queue.shift();
    }
    this.size = this._queue.length;
  }

  /**
   * 将队列转换为数组
   * @return {Array} 按队列顺序的数组
   */
  toArray() {
    return this._queue.toArray();
  }
}
