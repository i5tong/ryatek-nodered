module.exports = function (RED) {
    class IfNode {
        constructor(config) {
            RED.nodes.createNode(this, config);
            // 设定状态
            this.status({fill: 'grey', shape: 'ring', text: 'false'});
            this.on('input', msg => {
                if (msg.topic === config.topic) {
                    this.state = Boolean(msg.payload);
                    if (this.state) {
                        this.status({fill: 'green', shape: 'dot', text: 'true'});
                    } else {
                        this.status({fill: 'red', shape: 'ring', text: 'false'});
                    }
                } else if (this.state) {
                    this.send([msg, null]);
                } else {
                    this.send([null, msg]);
                }
            });
        }
    }
    RED.nodes.registerType('if', IfNode);
};
