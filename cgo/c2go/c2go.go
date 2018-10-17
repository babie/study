package c2go

/*
#include "c2go.h"
*/
import "C"

// GetTrue Get true value
func GetTrue() bool {
	b := bool(C.bt)
	return b
}

// GetFalse Get false value
func GetFalse() bool {
	b := bool(C.bf)
	return b
}

// GetInt Get int value
func GetInt() int {
	n := int(C.ni)
	return n
}

// GetFloat Get float value
func GetFloat() float32 {
	n := float32(C.nf)
	return n
}

func GetDouble() float64 {
	n := float64(C.nd)
	return n
}
