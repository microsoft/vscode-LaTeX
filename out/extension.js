'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
var upgradeAction;
(function (upgradeAction) {
    upgradeAction[upgradeAction["Stop"] = 0] = "Stop";
    upgradeAction[upgradeAction["Search"] = 1] = "Search";
})(upgradeAction || (upgradeAction = {}));
function activate(context) {
    const config = vscode.workspace.getConfiguration('LaTeX');
    if (config.get("StopAsking", false)) {
        // do nothing
    }
    else {
        vscode.window.showWarningMessage('There are better LaTeX extensions - please uninstall it and install another one.', { title: "Show Suggested Replacement", id: upgradeAction.Search }, { title: "Don't Ask Again", id: upgradeAction.Stop, isCloseAffordance: true }).then(selection => {
            switch (selection && selection.id) {
                case upgradeAction.Search:
                    var open = require('open');
                    open('https://marketplace.visualstudio.com/items?itemName=James-Yu.latex-workshop');
                    break;
                case upgradeAction.Stop:
                    config.update('StopAsking', true, true);
                    console.log("Wrote setting...");
                    break;
            }
        });
    }
    let subscriptions = context.subscriptions;
    let toggleCmd;
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map