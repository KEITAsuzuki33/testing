var words = [
    {"name":"piyo", "adress":"shinjuku"},
    {"name":"hoge", "adress":"kashiwa"} , 
    {"name":"piyo", "adress":"Ageo"} , 
    {"name":"piyo", "adress":"Koube"} , 
    {"name":"fuga", "adress":"omiya"} , 
];

var index = {}

words.forEach(function(word){
	var key = word.name
	if ( index[key] != null ) {
		index[key].push(word)
	} else {
		var value = [word]
		index[key] = valuek
	}
})

console.log(index)
console.log(index["hoge"])
console.log(index["fuga"])
console.log(index["piyo"])

二つのキーでインデックスを作成する場合、インデックスの中にインデックスを入れる
この場合だと、nameというキーで作成さてたインデックスがあり、さらにそこからAgeoをvalueとして持つキーを検索したい場合、
nameで作成されたインデックスの中にadressで作成されたインデックスを入れる
