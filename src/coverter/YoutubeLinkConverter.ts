import { Link2Image } from "./Link2Image";
import * as vscode from "vscode";


export class YoutubeLinkConverter implements Link2Image {

    
    /**
     * 与えられた位置にYoutubeリンクがあれば画像リンクを返す
     * @param document 
     * @param position 
     * @returns 
     */
     public convert(document: vscode.TextDocument, position: vscode.Position) {
        // ホバー行
        const line = document.lineAt(position.line);
        const lineText = line.text
        
        // Youtube動画形式をチェック
        const re = new RegExp("https://www\.youtube\.com/watch.v=([a-zA-Z0-9]+)")	
        const matches = re.exec(lineText);
        if(!matches){
            return
        }
        // リンクの位置
        const lineCount = lineText.search(re)
        if(lineCount < 0) {
            console.error("Found text, but count is negative.");
            return
        }

        // ホバー位置がリンク上かチェック
        const posStart = line.range.start.translate(0, lineCount)
        const posEnd = posStart.translate(0, matches[0].length)
        if(!new vscode.Range(posStart, posEnd).contains(position)){
            return;
        }
        const imageId = matches[1];
        return `https://img.youtube.com/vi/${imageId}/default.jpg`
    }
}