<?php


// // Function to find the total number of ways to get change
// // of N from unlimited supply of coins in set S
// public static int count(int[] S, int N)
// {
//     // if total is 0, return 1
//     if (N == 0) {
//         return 1;
//     }

//     // return 0 if total become negative
//     if (N < 0) {
//         return 0;
//     }

//     // initialize total number of ways to 0
//     int res = 0;

//     // do for each coin
//     for (int i = 0; i < S.length; i++)
//     {
//         // recur to see if total can be reached by including
//         // current coin S[i]
//         res += count(S, N - S[i]);
//     }

//     // return total number of ways
//     return res;
// }


function findCombinationsCount($coins=[], $change){
	if($change == 0){
		return 1;
	}

	if($change < 0){
		return 0;
	}

	$res = 0;

	for($i=0; $i<count($coins); $i++){
		$res += findCombinationsCount($coins, $change-$coins[$i]);
	}

	return $res;
}

var_dump(findCombinationsCount([1,10,25], 10));


// def recMC(coinValueList,change):
//    minCoins = change
//    if change in coinValueList:
//      return 1
//    else:
//       for i in [c for c in coinValueList if c <= change]:
//          numCoins = 1 + recMC(coinValueList,change-i)
//          if numCoins < minCoins:
//             minCoins = numCoins
//    return minCoins

// print(recMC([1,5,10,25],63))


// function make_change($coinValueList, $change){
// 	$minCoins = $change;

// 	if(in_array($change, $coinValueList)){
// 		return 1;
// 	}
// 	else{
// 		$newList = array_map(function($val){
// 			if($val < $change)
// 				return $val;
// 		}, $coinValueList);

// 		foreach($newList as &$value){
// 			$numCoins = 1 + make_change($newList, $change-$value);
// 			if($numCoins < $minCoins){
// 				$minCoins = $numCoins;
// 			}
// 		}
// 	}

// 	return $minCoins;
// }

// var_dump(make_change([1,10,25], 30));



// function make_change($amount=30, $coins= [25,10,5,1]){
// 	sort($coins);
// 	//var_dump($amount, $coins);

// 	$possible_combos = [];
// 	$current_change = [];

// 	$possible_combos = iterate_combos($amount, $coins, $current_change, $possible_combos);

// 	return $possible_combos;
// }

// function iterate_combos($amount, $coins, $current_change=[], $possible_combos){
// 	if($amount == 0){
// 		echo("reached the end: <br />");
// 		echo("possible_combos: ");
// 		var_dump($possible_combos);
// 		echo("<br />");	
// 		array_push($possible_combos, $current_change);

// 		return $possible_combos;
// 	}

// 	foreach($coins as $key=>$val){
// 		echo("coins: ");
// 		var_dump($coins);
// 		echo("<br />");
// 		echo("key: ");
// 		var_dump($key);
// 		echo("<br />");
// 		echo("value: ");
// 		var_dump($val);
// 		echo("<br />");
// 		$new_combo = array_merge($current_change, array($val));
// 		$new_amount = $amount - $val;

// 		echo("current_change: ");
// 		var_dump($current_change);
// 		echo("<br />");
		// echo("<br />");
		// var_dump($current_change);
		// echo("<br />");
		// echo("new_amount: ");
		// var_dump($new_amount);
		// echo("<br />");
// 		iterate_combos($new_amount, $coins, $new_combo, $possible_combos);
// 	}
// }

// $result = make_change(30, [25,10,1]);

// var_dump($result);

