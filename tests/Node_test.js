const chai = require('chai');
const expect = chai.expect;
const Node = require('../Node.js');

describe('Node', () => {
    it('should have a data property', () => {
      let node = new Node(10);

      expect(node.data).to.equal(10);
    });

    it('should have a default null value for left and right nodes', () => {
      let node = new Node(10);

      expect(node.left).to.equal(null);
      expect(node.right).to.equal(null);
    });

    it('can assign a left node', () => {
      let parent1 = new Node(10);
      let child1 = new Node(8);

      parent1.setLeft(child1);
      expect(parent1.left).to.deep.equal(child1);

      let child2 = new Node(8);
      let parent2 = new Node(10, child2);

      expect(parent2.left).to.deep.equal(child2);
    });

    it('can assign a right node', () => {
      let parent4 = new Node(10);
      let child5 = new Node(8);

      parent4.setLeft(child5);
      expect(parent4.left).to.deep.equal(child5);

      let child3 = new Node(10);
      let child4 = new Node(8);
      let parent3 = new Node(10, child3, child5);

      expect(parent3.right).to.deep.equal(child5);
    });
});
