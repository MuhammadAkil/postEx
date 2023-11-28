import { Component, ElementRef, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild('content')
  content!: ElementRef;

downloadPdf() {
  const content = this.content.nativeElement;

  html2canvas(content).then((canvas: { toDataURL: (arg0: string) => any; height: number; width: number; }) => {
    const pdf = new jspdf.jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 210;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    position = (imgHeight * pageHeight) / imgHeight;
    pdf.save('report.pdf');
  });
}
}
