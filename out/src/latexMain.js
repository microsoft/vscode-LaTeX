'use strict';
const vscode = require('vscode');
function activate(context) {
    let emphasizeSelection = vscode.commands.registerCommand("latex.emphasizeSelection", () => {
        let editor = vscode.window.activeTextEditor;
        if (editor) {
            let selections = editor.selections;
            editor.edit((tee) => {
                selections.forEach(s => {
                    tee.replace(s, "\\emph{" + editor.document.getText(s) + "}");
                });
            });
        }
    });
    let boldifySelection = vscode.commands.registerCommand("latex.boldifySelection", () => {
        let editor = vscode.window.activeTextEditor;
        if (editor) {
            let selections = editor.selections;
            editor.edit((tee) => {
                selections.forEach(s => {
                    tee.replace(s, "{\\bfseries " + editor.document.getText(s) + "}");
                });
            });
        }
    });
    context.subscriptions.push(emphasizeSelection);
    context.subscriptions.push(boldifySelection);
}
exports.activate = activate;
function deactivate() {
}
exports.deactivate = deactivate;
//# sourceMappingURL=latexMain.js.map