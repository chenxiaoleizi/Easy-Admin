import {
  ref,
  reactive,
  onMounted,
  computed,
  onBeforeUnmount,
  onUnmounted,
  nextTick,
  onScopeDispose,
} from "vue";
import type { Ref, Reactive } from "vue";
import dayjs from "dayjs";
// import { cloneDeep, isEqual } from "lodash-es";

export function useClock(format: string = "YYYY-MM-DD HH:mm:ss") {
  const timer = ref<any>();
  const clock = ref("");

  setClock();
  function setClock() {
    clock.value = dayjs().format(format);
    timer.value = setTimeout(() => {
      setClock();
    }, 1000);
  }

  // 清除定时器
  onUnmounted(() => {
    if (timer.value) {
      clearTimeout(timer.value);
    }
  });

  return clock;
}

// 验证码倒计时
export function useCountdown(seconds: number) {
  const current = ref();
  const isCounting = computed(() => current.value > 0);
  let timer: number;

  function startCountdown() {
    current.value = seconds;
    timer = window.setInterval(() => {
      current.value--;
      if (current.value <= 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  onScopeDispose(() => {
    if (timer) {
      clearInterval(timer);
    }
  });

  return { startCountdown, isCounting, current };
}

export function useVModel(props: any, propName: string, emit: any) {
  const value = computed({
    get() {
      return props[propName];
    },
    set(value) {
      emit(`update:${propName}`, value);
    },
  });

  return value;
}

export function useTablePagination(handleChange: () => void, options = {}) {
  const pagination = reactive({
    current: 1,
    pageSize: 10,
    total: 0,
    onChange,
    ...options,
  });

  function onChange(current: number, pageSize: number) {
    pagination.current = current;
    pagination.pageSize = pageSize;
    handleChange();
  }

  return pagination;
}

export function useTableScroll(tableRef: Ref, onScroll: () => void) {
  // 定义滚动函数
  function handleScroll() {
    const tableContainer = tableRef.value.$el.querySelector(".ant-table-body");
    const scrollPosition = tableContainer.scrollTop;
    const isTop = scrollPosition === 0;
    const isBottom = tableContainer.scrollHeight - scrollPosition === tableContainer.clientHeight;
    if (isTop) {
      console.log("重新加载");
    }
    if (isBottom) {
      console.log("加载更多");
      onScroll();
    }
  }

  // 添加scroll监听
  onMounted(() => {
    nextTick(() => {
      if (tableRef.value) {
        const tableContainer = tableRef.value.$el.querySelector(".ant-table-body");
        tableContainer.addEventListener("scroll", handleScroll);
      }
    });
  });

  // 移除scroll监听
  onBeforeUnmount(() => {
    nextTick(() => {
      if (tableRef.value) {
        const tableContainer = tableRef.value.$el.querySelector(".ant-table-body");
        tableContainer.removeEventListener("scroll", handleScroll);
      }
    });
  });
}

// export function useIsChanged(target: Ref | Reactive<any>) {
//   const reference =
// }
