# TypeScript


## TypeScript introudction
TypeScript is a programming which can be used as alternative to JavaScript(superset), it allows us to use strict types 
supports modern features, arrow functions ,let, const and extra features generics, interface and tuples etc 
it compiles down to javascript in order for browsers to undersatnd, that extra step put you off using typescript because in most cases it is very easy to compile it down and type script cpomes with a load of useful features 

strict types means that if I declare a variable in typescript to be a certain 



## Map:


In TypeScript, a Map is a built-in data structure that allows you to store key-value pairs, where both the keys and values can be of any type.

The syntax for creating a Map is as follows:

```TS
let map = new Map<KeyType, ValueType>();


```

KeyType and ValueType are the types of the keys and values in the Map, respectively. You can replace KeyType and ValueType with the specific types that you want to use.

For example, in the twoSum function you provided, the Map is created with the following syntax:

```TS
let map = new Map<number, number>();


```

This creates a Map object with keys and values of type number.

To add a key-value pair to a Map, you can use the set method:

```TS


map.set(key, value);


```

key is the key that you want to add to the Map, and value is the value associated with that key.

To retrieve a value from a Map, you can use the get method:


```TS
let value = map.get(key);


```


value will be the value associated with the key in the Map. If the key is not present in the Map, value will be undefined.

You can also check if a Map contains a key using the has method:

```TS
if (map.has(key)) {
    // do something
}
```

This will return true if the Map contains the key, and false otherwise.

To delete a key-value pair from a Map, you can use the delete method:

```TS

map.delete(key);

```

This will remove the key-value pair with the specified key from the Map.





1. Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.


```TS
function twoSum(nums: number[], target: number): number[] {

   let map = new Map<number, number>();

   for(let i = 0; i < nums.length; i ++){
       let complement = target - nums[i];

       if(map.has(complement)){
           return [map.get(complement), i];
       }
       map.set(nums[i], i);
   }

   return [];


};

```
