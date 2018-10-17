package main

import (
	"fmt"

	"github.com/babie/study/cgo/c2go"
)

func main() {
	t := c2go.GetTrue()
	f := c2go.GetFalse()
	i := c2go.GetInt()
	fmt.Printf("GetTrue: %#v\n", t)
	fmt.Printf("GetFalse: %#v\n", f)
	fmt.Printf("GetInt: %#v\n", i)
}
