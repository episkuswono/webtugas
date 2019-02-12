import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TableService{
    CoursesService(): any[]{
        throw new Error("Method not implement");
    }
    constructor(){}

    getEpis(){
        return[
            {id:0, hobby: "Bermain Game", ket: "Bermain ketika ada waktu senggang untuk menghilangkan penat"},
            {id:1, hobby: "Berburu", ket: "Berburu Burung disawah dan di hutan saat pulang kerja disawah"},
            {id:2, hobby: "Edit Video", ket: "Membuat hiburan untuk diri sendiri dan orang lain"}
        ]
    }
}