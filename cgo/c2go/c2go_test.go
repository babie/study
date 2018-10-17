package c2go

import (
	"testing"
)

func TestGetTrue(t *testing.T) {
	bt := GetTrue()
	if bt != true {
		t.Fatalf("Test failed of GetTrue(): t = %#v", bt)
	}
}

func TestGetFalse(t *testing.T) {
	f := GetFalse()
	if f != false {
		t.Fatalf("Test failed of GetFalse(): f = %#v", f)
	}
}

func TestGetInt(t *testing.T) {
	i := GetInt()
	if i != 42 {
		t.Fatalf("Test failed: i = %#v", i)
	}
}
