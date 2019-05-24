/**
 * 栈
 */
class Stack {
  constructor() {
    this._pool = []
    this.size = 0;  // 栈的大小
  }

  /**
   * 将元素压入栈中
   * @param element{any} 入栈的元素
   */
  push(element) {
    this._pool.push(element);
    this.size++;
  }

  /**
   * 弹出栈顶元素
   * @return {*} 弹出的元素内容，如果栈为空，则返回undefined
   */
  pop() {
    let el = this._pool.pop();
    if(el) {
      this.size--;
      return el;
    } else {
      return;
    }
  }

  /**
   * 获取栈顶元素，但不删除
   * @return {*} 栈顶元素内容
   */
  topElement() {
    return this._pool[this._pool.length-1];
  }

  /**
   * 判断栈是否为空
   * @return {boolean} 空：true；非空：false
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * 清空栈
   */
  clear() {
    this._pool.length = 0;
    this.size = 0;
  }
}

export default Stack