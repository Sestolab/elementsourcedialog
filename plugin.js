CKEDITOR.plugins.add('elementsourcedialog', {
	lang: 'en,ru,uk',
	requires: 'dialog',
	icons: 'elementsourcedialog',

	init: function(editor){
		editor.addCommand('elementsourcedialog', new CKEDITOR.dialogCommand('elementsourcedialog'));
		CKEDITOR.dialog.add('elementsourcedialog', this.path + 'dialogs/elementsourcedialog.js');

		editor.ui.addButton('elementsourcedialog', {
			label: editor.lang.elementsourcedialog.title,
			command: 'elementsourcedialog'
		});

		CKEDITOR.plugins.widget && editor.on('selectionChange', function(e){
			this.getCommand('elementsourcedialog').setState(CKEDITOR.plugins.widget.isDomWidget(e.data.path.lastElement)
				? CKEDITOR.TRISTATE_DISABLED
				: CKEDITOR.TRISTATE_OFF
			);
		});
	}
});

