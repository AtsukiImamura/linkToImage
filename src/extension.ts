import * as vscode from 'vscode';
import {Link2ImageHoverProvider} from "./Link2ImageHoverProvider"

export function activate(context: vscode.ExtensionContext) {
	
	let disposable = vscode.languages.registerHoverProvider({scheme: "file"}, new Link2ImageHoverProvider());
	context.subscriptions.push(disposable);
	
}

export function deactivate() {}
