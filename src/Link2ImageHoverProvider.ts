import * as vscode from "vscode";
import {YoutubeLinkConverter} from "./coverter/YoutubeLinkConverter"

export class Link2ImageHoverProvider implements vscode.HoverProvider{

    provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {

        { // for youtube
            const imageLink = new YoutubeLinkConverter().convert(document, position);
            if(imageLink){
                return new vscode.Hover(new vscode.MarkdownString(`![Youtube Image](${imageLink})`));
            }
        }
        { // for xxxx

        }
    }

    

}