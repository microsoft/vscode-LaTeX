/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';
import { ExtensionContext, languages } from 'vscode';

export function activate(context: ExtensionContext): any {
	languages.setLanguageConfiguration('latex', {
		indentationRules: {
			increaseIndentPattern: /^\s*\\begin\{.*\}/,
			decreaseIndentPattern: /^\s*\\end(\{.*\})?$/
		},
		wordPattern: /(-?\d+(?:\.\d+))|(:?[A-Za-z][^-`~@#%^&()=+[{}|;:'",<>/.*\]\s\\!?]*[!?]?)/
	});
}