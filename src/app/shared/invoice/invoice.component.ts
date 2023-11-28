

import { Component, ElementRef, ViewChild } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {
  @ViewChild('content')
  content!: ElementRef;


  tableData: any[] = [
    { vehicle: 'Lex-3443', inDate: '24-12-2023', inTime: '9:10 AM', outDate: '24-12-2023', outTime: '10-03-2024', hourlyRate: '$ 50', totalHours: 50, amount: '$ 500' },
    { vehicle: 'ABC-123', inDate: '25-12-2023', inTime: '10:30 AM', outDate: '25-12-2023', outTime: '11-03-2024', hourlyRate: '$ 40', totalHours: 40, amount: '$ 400' },
    { vehicle: 'XYZ-789', inDate: '30-12-2023', inTime: '3:45 PM', outDate: '30-12-2023', outTime: '4-03-2024', hourlyRate: '$ 60', totalHours: 60, amount: '$ 600' },
    { vehicle: 'Lex-3443', inDate: '24-12-2023', inTime: '9:10 AM', outDate: '24-12-2023', outTime: '10-03-2024', hourlyRate: '$ 50', totalHours: 50, amount: '$ 500' },
    
  ];
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {


  }


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
      pdf.save('invoice.pdf');
    });
  }


}
