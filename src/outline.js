export function verifyWord(actual_word, game_word, char_selected){
    let temp_actual_word = actual_word.split('');
    let temp_game_word = game_word.split('');
    for(let i = 0; i< temp_actual_word.length; i++){
        if(temp_actual_word[i] == char_selected){
            temp_game_word[i] = char_selected;
        }
    }
    game_word = temp_game_word.join('');
    return game_word;
}

