package c2go

/*
#include "c2go.h"
*/
import "C"

// GetInt Get bool value
func GetInt() int {
	b := int(C.b)
	return b
}
