---
title: Lodash
---
官网地址：https://www.lodashjs.com/

代码地址：https://gitee.com/workbook/lodash-demo.git

## Array

### _.chunk(array, [size=1])

可以用来做分页

- 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
- @param array (Array): 需要处理的数组
- @param [size=1] (number): 每个数组区块的长度
- @return (Array): 返回一个包含拆分区块的新数组（注：相当于一个二维数组）。

```javascript
console.log(_.chunk(['a', 'b', 'c', 'd'], 2))
console.log(_.chunk(['a', 'b', 'c', 'd'], 3))
```

### _.compact(array)

去掉数组中的假值

- 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
- *@param* array (Array): 待处理的数组
-  *@return* (Array): 返回过滤掉假值的新数组

```javascript
console.log(_.compact([0, 1, false, 2, '', 3]))
```
### _.concat



```javascript

```
### _.difference



```javascript

```
### _.differenceBy



```javascript

```
### _.differenceWith



```javascript

```
### _.drop



```javascript

```
### _.dropRight



```javascript

```
### _.dropRightWhile



```javascript

```
### _.dropWhile



```javascript

```
### _.fill



```javascript

```
### _.findIndex



```javascript

```
### _.findLastIndex



```javascript

```
### _.first -> head



```javascript

```
### _.flattern



```javascript

```
### _.flatternDeep



```javascript

```
### _.flatternDepth



```javascript

```
### _.fromPairs



```javascript

```
### _.head



```javascript

```
### _.indexOf



```javascript

```


```javascript

```
### _.initial



```javascript

```
### _.intersection



```javascript

```


```javascript

```
### _.intersectionBy



```javascript

```
### _.intersectionWith



```javascript

```
### _.join



```javascript

```
### _.last



```javascript

```
### _.lastIndexOf



```javascript

```
### _.nth



```javascript

```
### _.pull



```javascript

```
### _.pullAll



```javascript

```
### _.pullAllBy



```javascript

```
### _.pullAllWith



```javascript

```
### _.pullAt



```javascript

```
### _.remove



```javascript

```
### _.reverse



```javascript

```
### _.slice



```javascript

```
### _.sortedIndex



```javascript

```
### _.sortedIndexBy



```javascript

```
### _.sortedIndexOf



```javascript

```
### _.sortedLastIndex



```javascript

```
### _.sortedLastIndexBy



```javascript

```
### _.sortedLastIndexOf



```javascript

```
### _.sortedUniq



```javascript

```
### _.sortedUniqBy



```javascript

```
### _.tail



```javascript

```
### _.take



```javascript

```


```javascript

```
### _.takeRight



```javascript

```


```javascript

```


```javascript

```
### _.takeRightWhile



```javascript

```
### _.takeWhile



```javascript

```
### _.union



```javascript

```
### _.unionBy



```javascript

```
### _.unionWith



```javascript

```
### _.uniq



```javascript

```
### _.uniqBy



```javascript

```
### _.uniqWith



```javascript

```
### _.unzip



```javascript

```
### _.unzipWith



```javascript

```
### _.without



```javascript

```
### _.xor



```javascript

```
### _.xorBy



```javascript

```
### _.xorWith



```javascript

```
### _.zip



```javascript

```
### _.zipObject



```javascript

```
### _.zipObjectDeep



```javascript

```
### _.zipWith



```javascript

```
## Collection

### _.countBy



```javascript

```
### _.each -> forEach



```javascript

```
### _.eachRight -> forEachRight



```javascript

```
### _.evey



```javascript

```
### _.filter



```javascript

```


```javascript

```
### _.find



```javascript

```
### _.findLast



```javascript

```
### _.flatMap



```javascript

```
### _.flatMapDeep



```javascript

```
### _.flatMapDepth



```javascript

```
### _.forEach



```javascript

```
### _.forEachRight



```javascript

```
### _.groupBy



```javascript

```
### _.includes



```javascript

```
### _.invokeMap



```javascript

```
### _.keyBy



```javascript

```
### _.map



```javascript

```
### _.orderBy



```javascript

```
### _.partition



```javascript

```


```javascript

```
### _.reduce



```javascript

```
### _.reduceRight



```javascript

```
### _.reject



```javascript

```
### _.sample



```javascript

```
### _.sampleSize



```javascript

```
### _.shuffle



```javascript

```
### _.size



```javascript

```
### _.some



```javascript

```
### _.sortBy



```javascript

```
## Date

### _.now



```javascript

```
## Function

### _.after



```javascript

```
### _.ary



```javascript

```
### _.before



```javascript

```
### _.bind



```javascript

```
### _.bindKey



```javascript

```
### _.curry



```javascript

```
### _.curryRight



```javascript

```
### _.debounce



```javascript

```
### _.defer



```javascript

```
### _.delay



```javascript

```
### _.filp



```javascript

```
### _.memoize



```javascript

```
### _.negate



```javascript

```
### _.once



```javascript

```
### _.overArgs



```javascript

```
### _.partial



```javascript

```
### _.partialRight



```javascript

```
### _.rearg



```javascript

```
### _.rest



```javascript

```
### _.spread



```javascript

```
### _.throttle



```javascript

```
### _.unary



```javascript

```
### _.wrap



```javascript

```

## Lang

### _.castArray



```javascript

```
### _.clone



```javascript

```
### _.cloneDeep



```javascript

```
### _.cloneDeepWith



```javascript

```
### _.cloneWith



```javascript

```
### _.conformsTo



```javascript

```
### _.eq



```javascript

```
### _.gt



```javascript

```
### _.gte



```javascript

```
### _.isArguments



```javascript

```
### _.isArray



```javascript

```
### _.isArrayBuffer



```javascript

```
### _.isArrayLike



```javascript

```
### _.isArrayLikeObject



```javascript

```
### _.isBoolean



```javascript

```
### _.isBuffer



```javascript

```
### _.isDate



```javascript

```
### _.isElement



```javascript

```
### _.isEmpty



```javascript

```
### _.isEqual



```javascript

```
### _.isEqualWith



```javascript

```
### _.isError



```javascript

```
### _.isFinite



```javascript

```
### _.isFunction



```javascript

```
### _.isInteger



```javascript

```
### _.isLength



```javascript

```


```javascript

```
### _.isMap



```javascript

```
### _.isMatch



```javascript

```


```javascript

```
### _.isMatchWith



```javascript

```
### _.isNaN



```javascript

```
### _.isNative



```javascript

```
### _.isNil



```javascript

```
### _.isNull



```javascript

```
### _.isNumber



```javascript

```
### _.isObject



```javascript

```
### _.isObjectLinke



```javascript

```
### _.isPlainObject



```javascript

```
### _.isRegExp



```javascript

```
### _.isSafeInteger



```javascript

```
### _.isSet



```javascript

```
### _.isString



```javascript

```
### _.isSymbol



```javascript

```
### _.isTypedArray



```javascript

```
### _.isUndefined



```javascript

```
### _.isWeakMap



```javascript

```
### _.isWeakSet



```javascript

```


```javascript

```
### _.lt



```javascript

```
### _.lte



```javascript

```
### _.toArray



```javascript

```
### _.toFinite



```javascript

```
### _.toInteger



```javascript

```
### _.toLength



```javascript

```
### _.toNumber



```javascript

```
### _.toPlainObject



```javascript

```
### _.toSafeInteger



```javascript

```
### _.toString



```javascript

```
## Math

### _.add



```javascript

```
### _.ceil



```javascript

```
### _.divide



```javascript

```
### _.floor



```javascript

```
### _.max



```javascript

```
### _.maxBy



```javascript

```
### _.mean



```javascript

```
### _.meanBy



```javascript

```
### _.min



```javascript

```
### _.minBy



```javascript

```
### _.multiply



```javascript

```
### _.round



```javascript

```
### _.subtrack



```javascript

```
### _.sum



```javascript

```
### _.sumBy



```javascript

```
## Number

### _.clamp



```javascript

```
### _.inRange



```javascript

```
### _.random


```javascript

```

## Object

### _.assign



```javascript

```
### _.assignIn



```javascript

```
### _.assignInWith



```javascript

```
### _.assignWith



```javascript

```
### _.at



```javascript

```
### _.create



```javascript

```
### _.defaults



```javascript

```
### _.defaultsDeep



```javascript

```
### _.entries -> toPairs



```javascript

```
### _.entriesIn -> toPairsIn



```javascript

```
### _.extend -> assignIn



```javascript

```
### _.extendWith -> assignInWith



```javascript

```
### _.findKey



```javascript

```
### _.findLastKey



```javascript

```
### _.forIn



```javascript

```
### _.forInRight



```javascript

```
### _.forOwn



```javascript

```
### _.forOwnRight



```javascript

```
### _.functions



```javascript

```
### _.functionsIn



```javascript

```
### _.get



```javascript

```
### _.has



```javascript

```
### _.hasIn



```javascript

```
### _.invert



```javascript

```
### _.invertBy



```javascript

```
### _.invoke



```javascript

```
### _.keys



```javascript

```
### _.keysIn



```javascript

```
### _.mapKeys



```javascript

```
### _.mapValues



```javascript

```
### _.merge



```javascript

```
### _.mergeWith



```javascript

```
### _.omit



```javascript

```
### _.omitBy



```javascript

```
### _.pick



```javascript

```
### _.pickBy



```javascript

```
### _.result



```javascript

```
### _.set



```javascript

```
### _.setWith



```javascript

```
### _.toPairs



```javascript

```
### _.toPairsIn



```javascript

```
### _.transform



```javascript

```
### _.unset



```javascript

```
### _.update



```javascript

```
### _.updateWith



```javascript

```
### _.values



```javascript

```
### _.valuesIn



```javascript

```
## Seq

### _



```javascript

```
### _.chain



```javascript

```
### _.tap



```javascript

```
### _.thru



```javascript

```
### _.prototype[Symbol.iterator]



```javascript

```
### _.prototype.at



```javascript

```
### _.prototype.chain



```javascript

```
### _.prototype.commit



```javascript

```
### _.prototype.next



```javascript

```
### _.prototype.plant



```javascript

```
### _.prototype.reverse



```javascript

```
### _.prototype.toJSON -> value



```javascript

```
### _.prototype.value



```javascript

```
### _.prototype.valueOf -> value



```javascript

```
## String

### _.camelCase



```javascript

```
### _.capitalize



```javascript

```
### _.deburr



```javascript

```
### _.endsWith



```javascript

```
### _.escape



```javascript

```
### _.escapeRegExp



```javascript

```
### _.kebabCase



```javascript

```
### _.lowerCase



```javascript

```
### _.lowerFirst



```javascript

```
### _.pad



```javascript

```
### _.padEnd



```javascript

```
### _.padStart



```javascript

```
### _.parseInt



```javascript

```
### _.repeat



```javascript

```
### _.replace



```javascript

```
### _.snakeCase



```javascript

```
### _.split



```javascript

```


```javascript

```
### _.startCase



```javascript

```
### _.startsWith



```javascript

```
### _.template



```javascript

```
### _.toLower



```javascript

```
### _.toUpper



```javascript

```
### _.trim



```javascript

```
### _.trimEnd



```javascript

```
### _.trimStart



```javascript

```
### _.truncate



```javascript

```
### _.unescape



```javascript

```
### _.upperCase



```javascript

```
### _.upperFirst



```javascript

```
### _.words



```javascript

```
## Util

### _.attempt



```javascript

```
### _.bindAll



```javascript

```
### _.cond



```javascript

```
### _.conforms



```javascript

```
### _.constant



```javascript

```
### _.defaultTo



```javascript

```
### _.flow



```javascript

```
### _.flowRight



```javascript

```
### _.identity



```javascript

```
### _.iteratee



```javascript

```
### _.matches



```javascript

```
### _.matchesProperty



```javascript

```
### _.method



```javascript

```
### _.methodOf



```javascript

```
### _.mixin



```javascript

```
### _.noConflict



```javascript

```
### _.noop



```javascript

```
### _.nthArg



```javascript

```
### _.over



```javascript

```
### _.overEvery



```javascript

```
### _.overSome



```javascript

```
### _.property



```javascript

```
### _.propertyOf



```javascript

```
### _.range



```javascript

```
### _.rangeRight



```javascript

```
### _.runInContext



```javascript

```
### _.stubArray



```javascript

```
### _.stubFalse



```javascript

```
### _.stubObject



```javascript

```
### _.stubString



```javascript

```
### _.stubTrue



```javascript

```
### _.times



```javascript

```
### _.toPath



```javascript

```
### _.uniqueId



```javascript

```
## Properties

### _.VERSION



```javascript

```
### _.templateSettings



```javascript

```
### _.templateSettings.escape



```javascript

```
### _.templateSettings.evaluate



```javascript

```
### _.templateSettings.imports



```javascript

```
### _.templateSettings.interpolate



```javascript

```
### _.templateSettings.variable



```javascript

```
## Methods

### \_.templateSettings.imports._



```javascript

```
