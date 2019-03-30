/**
 * 链表节点
 */
class Node {
  constructor(value) {
    this.value = value;   // 节点值
    this.next = null;     // 指向下一个节点的指针
  }
}

/**
 * 单向链表
 */
export default class UnidirectionalLinkedList{
  constructor(array) {
    this.head = null;   // 链表头指针
    this.length = 0;    // 链表长度
    if(array) {
      for (let i = 0; i < array.length; i++) {
        this.push(array[i])
      }
    }
  }

  /**
   * 向链表末尾添加节点
   * @param value 新节点的内容
   */
  push(value) {
    let node = new Node(value);
    let curNode = null;
    if(this.head === null) {  // 当链表为空时，
      this.head = node;       // 插入的节点便是头结点
    } else {                  // 当链表不为空时
      curNode = this.head;
      // 查找到链表的最后一个节点
      while(curNode.next !== null) {
        curNode = curNode.next;
      }
      curNode.next = node;    // 最后一个节点指针指向新节点
    }
    this.length++;            // 链表长度加1
  }

  /**
   * 向链表头部添加节点
   * @param value 节点内容
   */
  unshift(value) {
    let node = new Node(value); // 新建节点
    if(this.head === null) {      // 如果链表为空
      this.head = node;           // 直接将新节点设为头节点
    } else {                      // 如果链表不为空
      let curNode = this.head;    // 记录当前头节点
      this.head = node;           // 令头节点为新节点
      this.head.next = curNode;   // 新头节点的下一节点为原头节点
    }
    this.length++;                // 链表长度加1
  }

  /**
   * 在某索引位置插入节点
   * @param value 节点内容
   * @param index 索引
   */
  insertAtIndex(value, index) {
    let node = new Node(value);
    if(index >= this.length || index < 0) {
      throw new Error("error: The index is not exist!")
    } else {
      if(index === 0) {                          // 索引位置为0时
        this.unshift(value);                   // 直接添加到头部
      } else {
        let curNode = this.head;
        for (let i = 0; i < index - 1; i++) {   // 查找到索引位置的前一个节点
          curNode = curNode.next;
        }
        node.next = curNode.next;
        curNode.next = node;
        this.length++;
      }
    }
  }

  /**
   * 替换某索引位置节点的内容
   * @param value
   * @param index
   */
  replaceAtInedx(value, index) {
    if (index < 0 || index >= this.length) {
      throw new Error("error: The index is not exist!")
    } else {
      let curNode = this.head;
      for(let i = 0; i < index; i++) {          // 查找到索引位置的节点
        curNode = curNode.next;
      }
      curNode.value = value;                  // 替换内容
    }
  }

  /**
   * 获取索引位置节点内容
   * @param index 索引
   * @return {*} 节点内容value
   */
  getValueByIndex(index) {
    if (index < 0 || index >= this.length) {}
    else {
      let curNode = this.head;
      for(let i = 0; i < index; i++) {          // 查找到索引位置的节点
        curNode = curNode.next;
      }
      return curNode.value;
    }
  }

  /**
   * 弹出链表最后一个节点，并从链表中移除
   * @return {Object} 最后一个节点
   */
  pop() {
    let curNode = this.head;
    let tailNode = null;
    if (this.length === 0) {
      throw new Error("Error! The UnidirectionalLinkedList is null.")
    } else if (this.length === 1) {
      tailNode = this.head;
      this.head = null;
      this.length--;
      return tailNode;
    } else {
      for (let i = 0; i < this.length - 2; i++) {
        curNode = curNode.next;
      }
      tailNode = curNode.next;
      curNode.next = null;
      this.length--;
      return tailNode;
    }
  }

  /**
   * 取出链表头部节点，并从链表中删除
   * @return {object} 头部节点
   */
  shift() {
    let head = null;
    if (this.length === 0) {
      throw new Error("Error! The UnidirectionalLinkedList is null.")
    } else if (this.length === 1) {
      head = this.head;
      this.head = null;
      this.length--;
      return head;
    } else {
      head = this.head;
      let curNode = this.head.next;
      head.next = null;
      this.head = curNode;
      this.length--;
      return head;
    }
  }

  /**
   * 移除索引位置的节点
   * @param index 索引位置
   */
  removeByIndex(index) {
    if(index < 0 || index >= this.length) {
      throw new Error("error: The index is not exist!")
    } else {
      if(index === 0) {
        this.shift();
      } else if(index === this.length - 1) {
        this.pop();
      } else {
        let curNode = this.head;
        for(let i = 0; i < index - 1; i++) {
          curNode = curNode.next;
        }
        let remNode = curNode.next;
        curNode.next = remNode.next;
        remNode.next = null;
        this.length--;
      }
    }
  }

  /**
   * 移除指定内容的节点
   * @param value 值
   */
  removeByValue(value) {
    if(this.length === 0) {
      throw new Error("Error! The UnidirectionalLinkedList is null.")
    } else {
      let beforeNode = this.head;
      let curNode = this.head;
      for(let i = 0; i < this.length; ) {
        if(curNode.value === value) {
          if(curNode === this.head) { // 如果是头节点
            this.shift();
            beforeNode = this.head;
            curNode = this.head;
          } else if (curNode.next === null) { // 如果是尾节点
            this.pop();
            break;
          } else {    // 如果是中间节点
            beforeNode.next = curNode.next;
            curNode.next = null;
            curNode = beforeNode.next;
            this.length--;
          }
        } else {
          if(curNode === beforeNode) {
            curNode = beforeNode.next;
          } else {
            beforeNode = beforeNode.next;
            curNode = beforeNode.next;
          }
          i++;
        }
      }
    }
  }

  /**
   * 截取子链表
   * @param startIndex 子链表开始位置索引
   * @param endIndex 子链表结束位置索引
   */
  subLinkedList(startIndex, endIndex) {
    if (startIndex < 0 || startIndex >= this.length) {
      throw new Error("Error! The start index is not exist.")
    } else if (endIndex < 0 || endIndex >= this.length) {
      throw new Error("Error! The end index is not exist.")
    } else if (startIndex > endIndex) {
      throw new Error("Error! The start index is greater then end index.")
    } else {
      let newList = new UnidirectionalLinkedList();
      let startNode = this.head;
      let s = 0;
      for(s; s < startIndex;s++) {
        startNode = startNode.next;
      }
      let curNode = startNode
      for(let e = s - 1; e < endIndex; e++) {
        newList.push(curNode.value);
        curNode = curNode.next;
      }
      return newList
    }
  }

  /**
   * 将链表转换为数组
   * @return {Array} 转换结果
   */
  toArray() {
    let arr = [];
    if (this.length === 0) {
      return arr;
    } else {
      let curNode = this.head;
      for (let i = 0; i < this.length; i++) {
        arr.push(curNode.value);
        curNode = curNode.next;
      }
      return arr;
    }
  }

  /**
   * 将数组转换为链表（静态方法）
   * @param arr 待转换的数组
   * @return {UnidirectionalLinkedList} 转换后的结果
   */
  static makeArrayToList(arr) {
    let list = new UnidirectionalLinkedList();
    for (let i = 0; i < arr.length; i++) {
      list.push(arr[i])
    }
    return list;
  }
}

