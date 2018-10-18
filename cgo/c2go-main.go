package main

import (
	"fmt"

	"github.com/babie/study/cgo/c2go"
)

func main() {
	fmt.Printf("GetTrue: %#v\n", c2go.GetTrue())
	fmt.Printf("GetFalse: %#v\n", c2go.GetFalse())
	fmt.Printf("GetInt: %#v\n", c2go.GetInt())
	fmt.Printf("GetFloat: %#v\n", c2go.GetFloat())
	fmt.Printf("GetDouble: %#v\n", c2go.GetDouble())
	fmt.Printf("GetChars: %#v\n", c2go.GetChars())
}
