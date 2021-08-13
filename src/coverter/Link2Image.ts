import * as vscode from "vscode";

export interface Link2Image {

    /**
     * 与えられたドキュメントの位置に、画像に変換可能なコンテンツがあれば画像リンクを生成して
     * @param document 
     * @param position 
     */
    convert(document: vscode.TextDocument, position: vscode.Position): string | undefined;
}