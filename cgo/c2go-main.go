package main

import (
	"fmt"
	"reflect"

	"github.com/babie/study/cgo/c2go"
)

func main() {
	bt := c2go.GetTrue()
	bf := c2go.GetFalse()
	ni := c2go.GetInt()
	nf := c2go.GetFloat()
	nd := c2go.GetDouble()
	fmt.Printf("GetTrue: %v %#v\n", reflect.TypeOf(bt), bt)
	fmt.Printf("GetFalse: %v %#v\n", reflect.TypeOf(bf), bf)
	fmt.Printf("GetInt: %v %#v\n", reflect.TypeOf(ni), ni)
	fmt.Printf("GetFloat: %v %#v\n", reflect.TypeOf(nf), nf)
	fmt.Printf("GetDouble: %v %#v\n", reflect.TypeOf(nd), nd)
}
