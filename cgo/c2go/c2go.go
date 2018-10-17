package c2go

/*
#include "c2go.h"
*/
import "C"

// GetTrue Get true value
func GetTrue() bool {
	bt := bool(C.t)
	return bt
}

// GetFalse Get false value
func GetFalse() bool {
	bf := bool(C.f)
	return bf
}

// GetInt Get int value
func GetInt() int {
	i := int(C.i)
	return i
}
