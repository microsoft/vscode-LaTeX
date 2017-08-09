'use strict'

import * as vscode from 'vscode';

enum upgradeAction {
    Stop,
    Search
}

interface UpgradeMessageItem extends vscode.MessageItem {
    id: upgradeAction;
}

export function activate(context: vscode.ExtensionContext): void {
        const config = vscode.workspace.getConfiguration('LaTeX');

        if (config.get("StopAsking", false)) {
        	// do nothing
        } else {
            vscode.window.showWarningMessage<UpgradeMessageItem>(
                'There are better LaTeX extensions - please uninstall it and install another one.',
                { title: "Show Suggested Replacement", id: upgradeAction.Search },
                { title: "Don't Ask Again", id: upgradeAction.Stop, isCloseAffordance: true }
            ).then(selection => {
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

        let subscriptions: vscode.Disposable[] = context.subscriptions;
        let toggleCmd: vscode.Disposable;
}