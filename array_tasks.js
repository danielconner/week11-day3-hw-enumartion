var arrayTasks = {

	concat: function (arr1, arr2) {
		 let newArray = arr1.concat(arr2);
		 return newArray;
	},

	insertAt: function (arr, itemToAdd, index) {
	 	arr.splice(index,0,itemToAdd);
		return arr
	},

	square: function (arr) {
		let newArray = []
		for(let element of arr){
			newArray.push(element * element);
		}
		return newArray;
	},

	sum: function (arr) {
		total= 0;
		for(let e of arr){
			total += e;
		}
		return total;
	},

	findDuplicates: function (arr) {
		let duplicates = [];
        for (element of arr){
            if (arr.indexOf(element) !== arr.lastIndexOf(element)){
                if (!duplicates.includes(element)){
                    duplicates.push(element);
                }
            }
        }
        return duplicates;
    },


	removeAndClone: function (arr, valueToRemove) {
		let newArray = [];
		arr.filter(function(element){
			if(element !== valueToRemove){
				newArray.push(element);
			}
		})
		return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		let newArray = [];
		for(let index in arr){
			let element = arr[index];
			if(element === itemToFind){
				newArray.push(parseInt(index))
			}
		};
		return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		let evenArray =[];
		arr.forEach(function(element){
			if(element % 2==0){
				evenArray.push(element);
			}
		});
			let result = this.sum(this.square(evenArray));
			return result;
	}
}


module.exports = arrayTasks
