export class Lang {
	constructor(lang = 'en') {
		this.lang = lang;
	}
	getStr(str) {
		return Lang[this.lang][str];
	}
}
Lang.en = {
	Yes: 'Yes',
	No: 'No',
	Done: 'Done',
	Todo: 'Todo',
	Card: 'Card',
	Cards: 'Cards',
	AddACard: 'Add a card',
	NewCard: 'New card',
	NewColumn: 'New column',
	new: 'new',
	task: 'task',
	personal: 'personal',
	work: 'work',
	important: 'important'
};
Lang.fr = {
	Yes: 'Oui',
	No: 'Non',
	Done: 'Terminé',
	Todo: 'À faire',
	Card: 'Tâche',
	Cards: 'Tâches',
	AddACard: 'Nouvelle tâche',
	NewCard: 'Nouvelle tâche',
	NewColumn: 'Nouvelle colonne',
	new: 'nouveau',
	task: 'tâche',
	personal: 'personnel',
	work: 'travail',
	important: 'important'
};
Lang.es = {
	Yes: 'Si',
	No: 'No',
	Done: 'Finalizado',
	Todo: 'Por hacer',
	Card: 'Tarjeta',
	Cards: 'Tarjetas',
	AddACard: 'Añadir tarjeta',
	NewCard: 'Nueva tarjeta',
	NewColumn: 'Nueva columna',
	new: 'Nuevo',
	task: 'Tarea',
	personal: 'Personal',
	work: 'Trabajo',
	important: 'Importante'
};
