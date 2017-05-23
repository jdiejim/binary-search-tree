const chai = require('chai');
const expect = chai.expect;
const BinaryTree = require('../BinaryTree.js');
const Node = require('../Node.js');

describe('BinaryTree', () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
  });

  it('should have a root node defaulted to null', () => {
    expect(tree.root).to.equal(null);
  });

  describe('PUSH', () => {
    let tree;

    beforeEach(() => {
      tree = new BinaryTree();
    });

    it('should be able to add a node to the Tree', () => {
      let rootNode = new Node(10);

      tree.push(rootNode);
      expect(tree.root).to.deep.equal(rootNode);
    });

    it('should move smaller data to the left', () => {
      let rootNode = new Node(10);
      let smallChild = new Node(8);

      tree.push(rootNode);
      tree.push(smallChild);
      expect(tree.root.left).to.deep.equal(smallChild);
    });

    it('should move larger data to the right', () => {
      let rootNode = new Node(10);
      let largeChild = new Node(12);

      tree.push(rootNode);
      tree.push(largeChild);
      expect(tree.root.right).to.deep.equal(largeChild);
    });

    it('should add data equal to the rootNode to the left', () => {
      let rootNode = new Node(10);
      let equalNode = new Node(10);

      tree.push(rootNode);
      tree.push(equalNode);
      expect(tree.root.left).to.deep.equal(equalNode);
    });

    it('should continue adding smaller data to the left down the tree', () => {
      let rootNode = new Node(10);
      let smallChild = new Node(8);
      let smallerChild = new Node(7);

      tree.push(rootNode);
      tree.push(smallChild);
      tree.push(smallerChild);
      expect(tree.root.left.left).to.deep.equal(smallerChild);
    });

    it('should continue adding larger data to the right down the tree', () => {
      let rootNode = new Node(10);
      let largeChild = new Node(12);
      let largerChild = new Node(14);

      tree.push(rootNode);
      tree.push(largeChild);
      tree.push(largerChild);
      expect(tree.root.right.right).to.deep.equal(largerChild);
    });

    it('creates a tree structure wit.skiph multiple nodes', () => {
      let rootNode = new Node(10);
      let largeChild = new Node(12);
      let largerChild = new Node(14);
      let smallChild = new Node(8);
      let smallerChild = new Node(7);

      tree.push(rootNode);
      tree.push(largeChild);
      tree.push(largerChild);
      tree.push(smallChild);
      tree.push(smallerChild);
      expect(tree.root.right.right).to.deep.equal(largerChild);
      expect(tree.root.left.left).to.deep.equal(smallerChild);
    });

});

  describe('FIND', () => {

    beforeEach(() => {
      tree.push(5);
    });

    it.skip('should find a match if node exists', () => {

    });

    it.skip('should return null if no match is found', () => {

    });

    beforeEach(() => {

              tree.push(4);
              tree.push(6);
              tree.push(7);
              tree.push(2);
              tree.push(3);
              tree.push(5);
              tree.push(1);
    });

    it.skip('should be able to find the root', () => {

    });

    it.skip('should be able to find results to the immediate left (2)', () => {

    });

    it.skip('should be able to find results to the far left (1)', () => {

    });

    it.skip('should be able to find results to the immediate right (6)', () => {

    });

    it.skip('should be able to find nested results (5 and 3)', () =>  {

    });

  });

  describe('toArray', () => {
    it.skip('should return an empty array if no nodes exist', () => {

    });

    it.skip('should return data from the tree into an array, starting with the root, then all left values, then all right', () => {
      tree.push(5);
      tree.push(4);
      tree.push(6);
      tree.push(7);
      tree.push(3);
    });
  });

  describe('SORT', () => {
    it.skip('should return an empty array if no nodes exist', () => {

    });

    it.skip('should return a sorted array of tree elements, small to large', () => {
      tree.push(5)
      tree.push(4)
      tree.push(6)
      tree.push(7)
      tree.push(3)
      tree.push(2)
      tree.push(2102)
    });
  });

  describe('MIN and MAX', () => {

    it.skip('min should return null if no nodes exist', () => {

    });

    it.skip('max should return null if no nodes exist', () => {

    });

    beforeEach(() => {
      tree.push(4);
      tree.push(6);
      tree.push(7);
      tree.push(2);
      tree.push(3);
      tree.push(5);
      tree.push(1);
    });

    it.skip('should find the min value', () => {

    });

    it.skip('should find the max value', () => {

    });
  });

  describe('DELETE', () => {

  })

  describe('getCount', () => {

  });

  describe('getSum', () => {

  });


  describe('getLevelofNode', () => {
    //returns how may levels down from root node the searched value is
  });

  describe('getLevelofNode', () => {
    //returns how may levels down from root node the searched value is
  });
});
