package c2go

import (
	"testing"
)

func TestGetTrue(t *testing.T) {
	b := GetTrue()
	if b != true {
		t.Fatalf("Test failed: GetTrue() returns %#v", b)
	}
}

func TestGetFalse(t *testing.T) {
	b := GetFalse()
	if b != false {
		t.Fatalf("Test failed: GetFalse() returns %#v", b)
	}
}

func TestGetInt(t *testing.T) {
	n := GetInt()
	if n != 42 {
		t.Fatalf("Test failed: GetInt() returns %#v", n)
	}
}

func TestGetFloat(t *testing.T) {
	n := GetFloat()
	if n != 1.4141356 {
		t.Fatalf("Test failed: GetFloat() returns %#v", n)
	}
}

func TestGetDouble(t *testing.T) {
	n := GetDouble()
	if n != 3.14159265359 {
		t.Fatalf("Test failed: GetDouble() returns %#v", n)
	}
}

func TestGetChars(t *testing.T) {
	s := GetChars()
	if s != "foo" {
		t.Fatalf("Test failed: GetChars() returns %#v", s)
	}
}
