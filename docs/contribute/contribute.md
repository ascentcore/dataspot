---
layout: default
title: Contribute
parent: 
grand_parent: 
has_children: true
---


# Create samples

In order to be able to use samples in the generated documentation the source code should be placed under `/samples/documentation/` under its relevan category. All samples created under this folder will be transpiled and can be used in: `Lab` application or in generated documentation.

Sample template:
```
export default (async () => {
    //place code here
})()
```

To make the sample available in the Lab application a related `tsx` file should be created under `/pages/samples` folder:

Sample file for label encoder
```
import '../../../samples/documentation/preprocessing/labelEncoder'

export default function() {
    return null
}
```
