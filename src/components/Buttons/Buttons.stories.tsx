import preview from "#.storybook/preview";
import { expect } from "storybook/test";
import { Button } from "./Buttons";

const meta = preview.meta({
  component: Button,
  tags: ["autodocs", "ai-generated"],
  parameters: {
    docs: {
      description: {
        component:
          'Button - базовый интерактивный компонент для действий пользователя. Поддерживает визуальные варианты, состояние disabled, растягивание на всю ширину и безопасный `type="button"` по умолчанию.',
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "Содержимое кнопки: текст, иконка или другой ReactNode.",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "text"],
      description: "Визуальный стиль кнопки в зависимости от важности действия.",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    fullWidth: {
      control: "boolean",
      description: "Растягивает кнопку на всю ширину родительского контейнера.",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Отключает кнопку и применяет disabled-стили.",
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "HTML-тип кнопки. Если не указан, компонент использует `button`.",
      table: {
        defaultValue: { summary: "button" },
      },
    },
  },
});

export const Primary = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Основной вариант для главного действия на экране.",
      },
    },
  },
  args: {
    children: "Create lesson",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("button", { name: /create lesson/i })).toHaveAttribute("type", "button");
  },
});

export const Secondary = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Вторичное действие рядом с основным или в менее приоритетных местах интерфейса.",
      },
    },
  },
  args: {
    children: "Cancel",
    variant: "secondary",
  },
});

export const Outline = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Контурная кнопка для действий средней важности без плотной заливки.",
      },
    },
  },
  args: {
    children: "Preview",
    variant: "outline",
  },
});

export const Text = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Текстовая кнопка для компактных действий, ссылочных команд или вторичных controls.",
      },
    },
  },
  args: {
    children: "Reset",
    variant: "text",
  },
});

export const FullWidth = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Кнопка занимает всю доступную ширину контейнера.",
      },
    },
  },
  args: {
    children: "Continue",
    fullWidth: true,
  },
});

export const Disabled = meta.story({
  parameters: {
    docs: {
      description: {
        story: "Недоступное состояние для действий, которые временно нельзя выполнить.",
      },
    },
  },
  args: {
    children: "Unavailable",
    disabled: true,
  },
});

export const CssCheck = meta.story({
  parameters: {
    docs: {
      disable: true,
    },
  },
  args: {
    children: "Styled action",
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole("button", { name: /styled action/i });

    await expect(getComputedStyle(button).backgroundColor).toBe("rgb(57, 125, 246)");
  },
});
