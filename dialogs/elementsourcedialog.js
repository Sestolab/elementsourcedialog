CKEDITOR.dialog.add('elementsourcedialog', function(editor){
	var size = CKEDITOR.document.getWindow().getViewPaneSize(),
		width = Math.min(size.width - 70, 800),
		height = size.height / 4;

	return {
		title: editor.lang.elementsourcedialog.title,
		minWidth: 100,
		minHeight: 100,
		contents: [{
			id: 'main',
			elements: [{
				type: 'textarea',
				id: 'html',
				inputStyle: 'width:' + width + 'px;height:' + height + 'px;',
				class: 'cke_source',
				setup: function(element){
					this.setValue(editor.dataProcessor.toDataFormat(element.getOuterHtml(), {context: 'p'}));
				},
				commit: function(element){
					if (this.getValue())
						CKEDITOR.dom.element.createFromHtml(editor.dataProcessor.toHtml(this.getValue())).replace(element);
				}
			}]
		}],
		onShow: function(){
			this.element = editor.getSelection().getStartElement();
			this.setupContent(this.element);
		},
		onOk: function(){
			this.commitContent(this.element);
		}
	};
});

