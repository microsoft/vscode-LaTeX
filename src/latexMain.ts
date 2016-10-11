'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
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

export function deactivate() {

}