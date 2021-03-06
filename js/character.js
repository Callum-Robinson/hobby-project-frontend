function Character(name, race, subrace, character_class, level, archetype, background, id = null) {
    this.name = name;
    this.race = race;
    this.subrace = subrace;
    this.character_class = character_class;
    this.level = level;
    this.archetype = archetype;
    this.background = background;
    this.id = id;
}

const characterHeaders = ['id', 'name', 'race', 'subrace', 'character_class', 'level', 'archetype', 'background'];

function renderCharacterTable(characters, containerElement) {
    const tableManager = new TableManager();
    const table = tableManager.createTable(characterHeaders, characters);
    containerElement.replaceChildren(table);
}
