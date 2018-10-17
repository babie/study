package main

import (
	"fmt"

	"github.com/babie/study/cgo/c2go"
)

func main() {
	b := c2go.GetInt()
	fmt.Printf("GetInt: %#v", b)
}
