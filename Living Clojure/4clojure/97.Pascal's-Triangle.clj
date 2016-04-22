((fn [n] (nth (iterate #(vec (map + (conj % 0) (cons 0 %))) '[1]) (dec n))) 3)
