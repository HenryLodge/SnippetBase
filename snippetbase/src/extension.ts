// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { HelloWorldPanel } from './HelloWorldPanel';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "snippetbase" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('snippetbase.helloWorld', () => {
			HelloWorldPanel.createOrShow(context.extensionUri);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand("snippetbase.askQuestion", async () => {
			const answer = await vscode.window.showInformationMessage("How are you today?",
				"Good",
				"Bad");

			if (answer === "Good") {
				vscode.window.showInformationMessage("Glad to hear that!");
			} else {
				vscode.window.showInformationMessage("I'm sorry to hear that :(");
			}
		})
	);
}

export function deactivate() {}
