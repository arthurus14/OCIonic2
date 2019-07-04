//import { Component } from '@angular/core';
//import { Pret } from '../models/Pret';

export class PretService{
	booksList = [
		{
			name : '1984',
			description : [
				'science-fiction'
			],
			isOn:true,
			emprunteur : ''
		},
		{
			name : 'la ferme des animaux',
			description : [
				'roman'
			],
			isOn:false,
			emprunteur : 'Jérémy'
		}
	];

	CdList = [
		{
			name : 'Kid rock',
			description : [
				'US'
			],
			isOn:true,
			emprunteur : ''
		},
		{
			name : 'Trio',
			description : [
				'Fr'
			],
			isOn:false,
			emprunteur : 'Jérémy'
		}
	]
}
