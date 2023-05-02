export function downloadFile(result: string, fileNameWithExt: string) {
    const link = document.createElement("A") as HTMLAnchorElement;
    const file = new Blob([ result ], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = fileNameWithExt;
    link.click();
    URL.revokeObjectURL(link.href);
}